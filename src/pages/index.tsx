import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center text-blue-600">
      Hello world!
    </h1>
    <div className="wrapper">
      <div className="flex-1">first</div>
      <div className="flex-1">second</div>
      <div className="flex-1">third</div>
      <div className="flex-1">fourth</div>
    </div>
    <Form />
  </>
  )
}
