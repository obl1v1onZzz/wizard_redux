import {useAppDispatch} from "../../../store/store.ts";
import {decreaseStep} from "../../../features/stepSlice.ts";

const MessageStep = () => {
    const dispatch = useAppDispatch()
    const backStepHandler = () => dispatch(decreaseStep())
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus mi vel metus rhoncus
                placerat.
                Donec at metus vitae massa ullamcorper maximus. Morbi sagittis consequat elementum. Morbi sit amet
                sagittis
                turpis. Nam ac nisl ut lacus auctor sagittis nec eu ipsum. Phasellus quis volutpat dui. Integer
                venenatis
                placerat erat et vestibulum. Nulla facilisi. Integer rhoncus nisl nisi, eu finibus arcu feugiat eget.
                Phasellus id velit ultrices, eleifend massa et, placerat ipsum. Donec lectus ipsum, volutpat ac vehicula
                quis, eleifend sit amet ante. Donec commodo bibendum velit, sit amet elementum quam. Vestibulum porta
                orci
                ac ligula or nare egestas. Quisque vitae tellus dapibus, ultricies elit vel, vehicula enim.</p>
            <button>Submit</button>
            <button onClick={backStepHandler}>Back</button>
        </div>
    );
};

export default MessageStep;
