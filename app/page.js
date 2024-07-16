"use client";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    fetch("/api/uploads", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Upload success");
      });
  };

  return (
    <main className="m-8">
      <h1 className="p-4 font-bold text-3xl text-center">
        Upload com NextJs 14
      </h1>

      <form className="w-[400px]" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" rows={8}></textarea>

        <label htmlFor="file">File</label>
        <input type="file" name="file" id="file" />

        <button className="bg-sky-500 p-2 text-white w-full hover:bg-sky-600 transition-all cursor-pointer mt-4">
          Carregar
        </button>
      </form>
    </main>
  );
}
