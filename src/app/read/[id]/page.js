export default async function page(props) {
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {
    cache: "no-store",
  });
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
