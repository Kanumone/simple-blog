import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({filter, setFilter}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",}}
        >
            <MyInput
                placeholder="Поиск"
                value={filter.searchQuery}
                onChange={e => setFilter({...filter, searchQuery: e.target.value})}
            />
            <MySelect
                defaultValue={"Сортировка"}
                options={[
                    {
                        name: 'По названию',
                        value: 'title'
                    },
                    {
                        name: 'По содержанию',
                        value: 'body'
                    }
                ]}
                value={filter.sortOption}
                onChange={(sortOption) => setFilter({...filter, sortOption})}
            />
        </div>
    );
}