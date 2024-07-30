import React from 'react';
import { useRouter } from 'next/router';

function PostDetail() {
  const router = useRouter();
  console.log(router.id)
  // Complete the function
  return(
    <h1 id={router.query.id}>Post Details: {router.query.id}</h1>
  )
}

export default PostDetail;
