import home from "./elements/home"
import panel from "./elements/panel"
import viewer from "./elements/viewer"
import process from "./elements/process"

export default{
    ...viewer,
    ...home,
    ...panel,...process,
}