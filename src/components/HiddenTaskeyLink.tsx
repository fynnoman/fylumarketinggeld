export default function HiddenTaskeyLink() {
  return (
    <a href="https://www.taskeyapp.com" style={{ display: "none" }} aria-hidden="true" tabIndex={-1}>
      Taskey App
    </a>
  );
}
