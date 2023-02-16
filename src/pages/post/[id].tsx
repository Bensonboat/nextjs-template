export async function getPostIdList() {
  return [
    {
      params: {
        id: "aaa",
      },
    },
    {
      params: {
        id: "bbb",
      },
    },
    {
      params: {
        id: "ccc",
      },
    },
  ];
}

export async function getPostDetails(postId: number) {
  const dataSet = {
    aaa: {
      title: "Post 1",
      description: "Lorem ipsum dolor sit amet...",
      date: "Oct 10, 2022",
    },
    bbb: {
      title: "Post 2",
      description: "Lorem ipsum dolor sit amet...",
      date: "Oct 20, 2022",
    },
    ccc: {
      title: "Post 3",
      description: "Lorem ipsum dolor sit amet...",
      date: "Oct 30, 2022",
    },
  };
  // @ts-ignore
  return dataSet[postId];
}

export async function getStaticPaths() {
  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostDetails(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: any) {
  return (
    <div className="bg-gray-800 h-screen p-16 text-gray-100">
      <div className="text-center font-bold text-3xl">{postData.title}</div>
      <div className="text-justify my-8 text-gray-200">
        {postData.description}
      </div>
      <div className="text-gray-400">Published On: {postData.date}</div>
    </div>
  );
}
