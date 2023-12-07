"use client";
import "./globals.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Control() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  return (
    <div className="flex">
      <Link href="/create" className="bottom">
        Create
      </Link>
      {id ? (
        <>
          <Link href={"/update/" + id} className="bottom">
            Update
          </Link>
          <input
            className="bottom button"
            type="button"
            value="Delete"
            onClick={() => {
              fetch("http://localhost:9999/topics/" + id, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  router.push("/");
                  router.refresh();
                });
            }}
          />
        </>
      ) : null}
    </div>
  );
}
