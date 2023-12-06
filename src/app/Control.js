"use client";
import "./globals.css";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Control() {
  const params = useParams();
  const id = params.id;
  return (
    <div className="flex">
      <Link href="/create" className="bottom">
        Create
      </Link>
      {id ? (
        <>
          {" "}
          <Link href={"/update/" + id} className="bottom">
            Update
          </Link>
          <input className="bottom button" type="button" value="Delete" />
        </>
      ) : null}
    </div>
  );
}
