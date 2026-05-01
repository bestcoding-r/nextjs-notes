export default async function Page({ params }) {
    console.log(params)
    const {catchRouting} = await params;
  return<>
   <h1>File Path /{catchRouting.join("/")}</h1>
   </>
}

