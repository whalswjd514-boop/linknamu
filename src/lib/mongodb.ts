import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;

if (!uri) {
  throw new Error("MONGODB_URL 환경 변수가 설정되지 않았습니다.");
}

// 개발 중 HMR로 모듈이 다시 로드돼도 연결을 재사용하기 위해 global에 보관
const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo.mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClientPromise = clientPromise;
}

export default clientPromise;
