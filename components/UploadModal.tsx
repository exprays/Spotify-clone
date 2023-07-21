"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState();
    const uploadModal = useUploadModal();

    //using react-hook-form
    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null, //because they are files
        },
    })

    const onChange = (open: boolean) => {
        if (!open) {
            //reset the form
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //Upload to supabase
    }

    return ( 
        <Modal
            title="Add your songs"
            description="upload a mp3 file"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4"
            >

                {/* Input fields for song upload */}
                <Input 
                    id="title"
                    disabled={isLoading}
                    {...register('title', { required: true })}
                    placeholder="Song title"
                />
                 <Input 
                    id="author"
                    disabled={isLoading}
                    {...register('author', { required: true })}
                    placeholder="Song author"
                />
                <div>
                    <div className="pb-1">
                        Select a mp3 file
                    </div>
                    <Input 
                        id="song"
                        type="file"
                        disabled={isLoading}
                        accept=".mp3"
                        {...register('song', { required: true })}
                    />
                </div>
                <div>
                    <div className="pb-1">
                        Select an image
                    </div>
                    <Input 
                        id="image"
                        type="file"
                        disabled={isLoading}
                        accept="image/*"
                        {...register('image', { required: true })}
                    />
                </div>
                <Button disabled={isLoading} type="submit">
                    Create
                </Button>
            </form>
        </Modal>
     );
}
 
export default UploadModal;