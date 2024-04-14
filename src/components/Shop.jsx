// eslint-disable-next-line react/prop-types
export default function Shop({ children }) {
  return (
    <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <h2
        className="font-mono 
                     text-dark-600 
                     text-4xl my-10"
      >
        Explore our timeless collection..
      </h2>
      <ul>{children}</ul>
    </section>
  );
}
