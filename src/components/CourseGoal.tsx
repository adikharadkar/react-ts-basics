import { type PropsWithChildren, type FunctionComponent as FC } from "react";

// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children, onDelete, id }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
