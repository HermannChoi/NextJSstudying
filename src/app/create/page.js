"use client";
import "./createPage.css";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  return (
    <>
      <div>This is Create Page</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value; //e.target하면 form 안을 가리킴. => name이 title인 태그
          const body = e.target.body.value;
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body }),
          };
          fetch("http://localhost:9999/topics", options)
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
          <input type="submit" value="submit" className="submit" />
        </div>
      </form>
    </>
  );
}
