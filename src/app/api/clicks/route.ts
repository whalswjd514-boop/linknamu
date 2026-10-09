import type { NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";
import { links } from "@/lib/links";

type ClickDoc = { _id: string; count: number };

async function getCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}

// 모든 링크의 클릭 수를 { [id]: count } 형태로 반환
export async function GET() {
  try {
    const docs = await (await getCollection()).find().toArray();
    const counts: Record<string, number> = Object.fromEntries(
      links.map((link) => [link.id, 0]),
    );
    for (const doc of docs) {
      if (doc._id in counts) counts[doc._id] = doc.count;
    }
    return Response.json(counts, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return Response.json({ error: "조회에 실패했습니다." }, { status: 500 });
  }
}

// 해당 링크의 클릭 수를 1 증가
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : null;

  if (!id || !links.some((link) => link.id === id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const result = await (
      await getCollection()
    ).findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 증가 실패", error);
    return Response.json({ error: "저장에 실패했습니다." }, { status: 500 });
  }
}
