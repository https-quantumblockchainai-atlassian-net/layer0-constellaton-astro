import React, { useEffect } from 'react'
import install from '@layer0/prefetch/window/install'
import installDevtools from '@layer0/devtools/install'

const Layer0 = () => {
  useEffect(() => {
    install({
      includeCacheMisses: true,
    })
    installDevtools()
  }, [])
  return <></>
}

export default Layer0
