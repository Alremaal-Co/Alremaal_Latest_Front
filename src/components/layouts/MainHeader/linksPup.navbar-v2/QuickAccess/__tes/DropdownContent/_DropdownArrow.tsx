export function DropdownArrow() {
    return (
      <>
        <svg
          className='absolute dark:hidden w-5 h-5 -right-5'
          width='7'
          height='7'
          viewBox='0 0 7 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 0H7L6.42326 0.144185C3.12153 0.969618 0.608809 3.65155 0 7V7V0Z'
            fill='#ffffff'
          />
        </svg>

        <svg
          className='absolute dark:block hidden w-5 h-5 -right-5'
          width='7'
          height='7'
          viewBox='0 0 7 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 0H7L6.42326 0.144185C3.12153 0.969618 0.608809 3.65155 0 7V7V0Z'
            fill='#393d56'
          />
        </svg>


        <svg
          className='absolute w-5 h-5 dark:hidden -left-5 rotate-90'
          width='7'
          height='7'
          viewBox='0 0 7 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 0H7L6.42326 0.144185C3.12153 0.969618 0.608809 3.65155 0 7V7V0Z'
            fill='#ffffff'
          />
        </svg>

        <svg
          className='absolute w-5 h-5 dark:block hidden -left-5 rotate-90'
          width='7'
          height='7'
          viewBox='0 0 7 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 0H7L6.42326 0.144185C3.12153 0.969618 0.608809 3.65155 0 7V7V0Z'
            fill='#393d56'
          />
        </svg>
      </>
    );
  }