import { SearchContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";

type SearchFormProps = {
  postsCount: number; // Tipo de la prop
  onSearch: (query: string) => void; // Tipo de la función que se ejecuta al buscar
};

// Nuestro esquema de validación.
const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

function SearchForm({ postsCount, onSearch }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  // Manejar el envío del formulario
  function handleSearchIssues(data: SearchFormInputs) {
    onSearch(data.query); // Llama a la función pasada desde el componente padre
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <h3>Publicaciones</h3>
        <span>
          {postsCount} {""}
          {postsCount > 1 ? "publicaciones" : "publicación"}
        </span>
      </div>

      <input
        type="text"
        placeholder="Buscar contenido"
        {...register("query")}
      />
    </SearchContainer>
  );
}

const SearchFormComponent = React.memo(SearchForm);
export { SearchFormComponent };
