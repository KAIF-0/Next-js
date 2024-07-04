//DYNAMIC ROUTES
export default function Page({ params }) {
    // throw new error("ERROR AA GYA HAI")                    //FOR ERROR PAGE
    // console.log(params)
    // console.log(params.slug)


    // let languages = ["python", "java", "javascript", "cpp", "cs", "c"]
    // if (languages.includes(params.slug)){
    return <div> My post: {params.slug}</div>
    // }else{
    //     return <div>Page not found</div>
    // }  
}