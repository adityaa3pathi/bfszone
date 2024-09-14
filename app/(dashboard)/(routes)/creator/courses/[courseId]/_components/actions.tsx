"use client"

import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Fondamento } from "next/font/google";
import { Button } from "../../../../../../../components/ui/button";
import { ConfirModal } from "../../../../../../../components/modals/confirm-modal";
import { useConfettiStore } from "../../../../../../../hooks/use-confetti-store";


interface ActionsProps  {
    disabled: boolean;
    courseId: string;
    isPublished: boolean;
};

export const Actions  = ({
    disabled,
    courseId,
    isPublished
}: ActionsProps) => {

    const router = useRouter();
    const confetti = useConfettiStore();
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);

            if(isPublished) {
                await axios.patch(`/api/courses/${courseId}/unpublish`);
                toast.success("Course unpublished")
            } else {
                await axios.patch(`/api/courses/${courseId}/publish`);
                toast.success("Course  Published")
                confetti.onOpen();
            }
                router.refresh();
        }
        catch {
            toast.error("something went wrong")
        }
        finally {
            setIsLoading(false);
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true)
            await axios.delete(`/api/courses/${courseId}`);

            toast.success("Chapter deleted")
            router.refresh();
            router.push(`/creator/courses`);
        }  catch(error) {
            console.log(error)
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }

    }

   return ( <div className="flex items-center gap-x-2">
        <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
        >
                {isPublished ? "Unpublish" : "Publish"}
        </Button>
        <ConfirModal onConfirm={onDelete}>
        <Button  size="sm">
            <Trash  className="h-4 w-4"/>
        </Button>
        </ConfirModal>
        </div>
)


}