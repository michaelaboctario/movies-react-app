'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
  
export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term){
    const params = new URLSearchParams(searchParams);
    //console.log(term);
    if (term) {
        params.set('s', term);
    } else {
        params.delete('s');
    }
    const url = `${pathname}?${params.toString()}`;
    replace(`${pathname}?${params.toString()}`);
  }
 
  return (
    <div className='d-flex col-sm-4 align-items-start justify-content-start px-4'>
      <label htmlFor="search" className='m-2 p-2'>
        Search
      </label>
      <input
        name="search"
        className='form-control m-2 p-2'
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('s')?.toString()}
      />
      
    </div>
  );
}