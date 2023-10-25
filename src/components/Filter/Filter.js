import { FilterInputStyle, FilterStyle, TextToDo } from './Filter.styled'

export const Filter = ({ filterName, onChange}) => {
    return (
        <FilterStyle>
          <TextToDo>Find contacts by name</TextToDo>
            <FilterInputStyle
            type="text"
            value={filterName}
            placeholder="Please, enter a name"
            onChange={onChange}
            />
        </FilterStyle>
    )
}
