// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTab = () => {
    updateActiveId(tabId)
  }
  const tabBtnClassName = isActive ? `tab-button-active` : `tab-button`
  return (
    <li className="tab-item">
      <button className={tabBtnClassName} type="button" onClick={onClickTab()}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
