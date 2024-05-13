import { useEffect, useState } from "react"
import axios from "axios"

const Forum = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts")
        .then(resposta => {
            setPosts(resposta.data)
        })
        .catch(error => {
            console.error('Erro ao carregar os posts: ' , error)
        })
    }, [])
    
    return(
        <>
            <h1>Tela Fórum</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
            )) }
        </>
        
    )
}

export default Forum