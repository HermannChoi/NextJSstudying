"use client";
import { useEffect } from "react";
import "src/app/create/createPage.css";
import { useParams, useRouter } from "next/navigation";

export default function Update() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "topics/" + id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const title = result.title;
        const body = result.body;
        document.querySelector(".title").value = title;
        document.querySelector(".body").value = body;
      });
  }, []);

  return (
    <>
      <div>This is Create Page</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value; //e.target하면 form 안을 가리킴. => name이 title인 태그
          const body = e.target.body.value;
          const options = {
            method: "PATCH", //or PUSH => 수정한걸 덮어씀.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body }),
          };
          fetch("http://localhost:9999/topics/" + id, options) // options => 어떤 형식으로 불러올 건지
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              const lastID = result.id;
              router.push(`/read/${lastID}`);
              router.refresh();
            });
        }}
      >
        <div>
          <input
            type="text"
            name="title"
            placeholder="title"
            className="title"
            required
          />
        </div>
        <div>
          <textarea
            name="body"
            placeholder="body"
            cols="20"
            rows="5"
            className="body"
            required
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Update" className="submit" />
        </div>
      </form>
    </>
  );
}
