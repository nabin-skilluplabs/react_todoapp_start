import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { todoValidationSchema } from '../validationSchemas/todoSchema';
import { addToDo } from "../actions/todo";

export default function ToDoForm({toDos, setToDos}) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(todoValidationSchema),
      });

    const onSubmit = async(data) =>{
        const newTodo = await addToDo(data);
        setValue('title', '');
        setToDos([newTodo, ...toDos]);
    }

    return(
        <form className="flex flex-col gap-1 mt-3 mb-3" onSubmit={handleSubmit(onSubmit)}>
            <input disabled={isSubmitting} className="text-xl w-full p-4 border  rounded-md" placeholder="Add new task..." {...register('title')} type="text" />
            {
                errors.title && (<span className="text-sm text-red-500 italic">{errors.title.message}</span>)
            }
        </form>
    );
}