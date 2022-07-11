import renderer from 'react-test-renderer'
import Login from "./Login";
import {Provider} from "react-redux";
import store from "../../app/store";
import {render, fireEvent} from '@testing-library/react'

it('correctly render ', () => {
    const tree = renderer
        .create(<Provider store={store}><Login></Login></Provider>)
        .toJSON()
    expect((tree)).toMatchSnapshot();
})

const setup = () => {
    const utils = render(<Provider store={store}><Login></Login></Provider>)
    const input = utils.getByLabelText('userName')
    return {
        input,
        ...utils,
    }
}

test('It should change input', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: 'test'}})
    expect(input.value).toBe('test')
})

it("submit form", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<Provider store={store}><Login></Login></Provider>);
    fireEvent.submit(getByTestId("form"));
    expect(onSubmit).toBeCalledTimes(0);
});
