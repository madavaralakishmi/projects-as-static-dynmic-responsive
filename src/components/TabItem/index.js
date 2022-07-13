import './index.css'

const TabItem = props => {
  const {tabDetails, updatedTabId, active} = props
  const {tabId, displayText} = tabDetails

  const onButton = () => {
    updatedTabId(tabId)
  }

  const activeButton = active ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeButton}`}
        onClick={onButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
