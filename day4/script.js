  function createToster(config) {
        const parent = document.querySelector('.parent')

        parent.className = `
          parent fixed flex flex-col gap-3 z-50
          ${config.positionX === 'right' ? 'right-5' : 'left-5'}
          ${config.positionY === 'bottom' ? 'bottom-5' : 'top-5'}
        `

        return function (note) {
          const div = document.createElement('div')
          div.textContent = note

          div.className = `
            inline-block px-6 py-3 rounded shadow-lg pointer-events-none
            transition-opacity duration-500
            ${config.theme === 'dark'
              ? 'bg-zinc-800 text-white'
              : 'bg-sky-500 text-black'}
          `

          parent.appendChild(div)

          setTimeout(() => {
            div.classList.add('opacity-0')

            setTimeout(() => {
              div.remove()
            }, 500)
          }, config.duration * 1000)
        }
      }

      const toaster = createToster({
        positionX: 'left',
        positionY: 'top',
        theme: 'dark',
        duration: 3
      })

      toaster('download pending')

      setTimeout(() => {
        toaster('download done')
      }, 3000)
      setTimeout(() => {
        toaster('download done')
      }, 3000)
      setTimeout(() => {
        toaster('download done')
      }, 3000)