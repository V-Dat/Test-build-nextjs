export const Comments = ({
  data,
}: {
  data: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
}) => {
  return (
    <div className="flex flex-col gap-10">
      {data?.map((c) => (
        <div className="flex gap-6" key={c.id}>
          <div className="text-[24px] font-bold">{c.name} :</div>
          <div className="text-[20px]">{c.body}</div>
        </div>
      ))}
    </div>
  );
};
