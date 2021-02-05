export const didNavigate = () => {
    const e = new CustomEvent("didNavigate", { bubbles: true, composed: true })
    document.dispatchEvent(e)
    console.log("didNavigate")
}
