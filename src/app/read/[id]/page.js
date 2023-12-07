export default async function Read(props) {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const topic = await resp.json();

  return (
    <>
      <h1>{topic.title}</h1>
      <div>parameter : {props.params.id}</div>
      <br />
      <div>{topic.body}</div>
    </>
  );
}
