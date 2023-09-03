import React, { ReactNode } from 'react';

export type ContentProps = {
    img?: ReactNode,
    children?: ReactNode
}

export type ListItemProps = {
    header: ReactNode,
    ListItemType: string,
    history:any
}