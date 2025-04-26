import { NextResponse } from "next/server";
import { products } from "../../../data/books";

export async function GET() {
  return NextResponse.json(products);
}
