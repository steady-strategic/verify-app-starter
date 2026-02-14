"use client";

import React from "react";

interface BlogFormProps {
    className?: string;
}

export const BlogForm: React.FC<BlogFormProps> = ({ className = "" }) => {
    return (
        <div
            className={`hs-form-frame min-h-[320px] ${className}`}
            data-region="na2"
            data-form-id="fdb9ed11-ff4f-4c8c-9eea-e34704b4b8df"
            data-portal-id="243662289"
        />
    );
};
