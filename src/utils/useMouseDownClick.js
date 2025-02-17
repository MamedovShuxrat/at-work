import React, { useEffect } from 'react'

const useMouseDownClick = (menuRef, callback) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                callback()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuRef, callback])
}

export default useMouseDownClick