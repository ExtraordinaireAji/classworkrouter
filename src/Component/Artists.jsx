import React from 'react'

const Artists = () => {
    const NgnArtists = ['Wizkid', 'Burnaboy', 'Davido', 'Olamide', 'Bnxn']
  return (
   <>
        {
            NgnArtists.map((NgnArtist) => (
                <h3>
                    {NgnArtist}
                </h3>
            ))
        }
   </>
  )
}

export default Artists