import home from "./elements/home"
import panel from "./elements/panel"
import viewer from "./elements/viewer"
import process from "./elements/process"
import navbar from "./elements/navbar"
import apps from "./elements/apps"

export default{
    ...viewer,
    ...home,...panel,...process,...navbar,...apps
}