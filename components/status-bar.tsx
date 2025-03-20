export function StatusBar() {
  return (
    <div className="ios-status-bar flex items-center justify-between px-5 pt-2 text-white">
      <div className="text-sm font-medium">9:41</div>
      <div className="flex items-center gap-1">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 3.5C1 2.11929 2.11929 1 3.5 1H12.5C13.8807 1 15 2.11929 15 3.5V8.5C15 9.88071 13.8807 11 12.5 11H3.5C2.11929 11 1 9.88071 1 8.5V3.5Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path d="M15.5 4.5V7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 2.26795C8.16667 2.61619 8.83333 2.96443 9.5 3.31267C10.1667 3.66091 10.8333 4.00915 11.5 4.35739C12.1667 4.70563 12.8333 5.05387 13.5 5.40211V6.59789L7.5 9.73205L1.5 6.59789V5.40211L7.5 2.26795Z"
            fill="white"
          />
        </svg>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="16" height="10" rx="2" stroke="white" strokeWidth="1.5" />
          <path d="M5 4H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 8H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

