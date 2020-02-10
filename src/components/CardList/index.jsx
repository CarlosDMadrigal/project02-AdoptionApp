import React from 'react'
import { Grid, Link, Button, Box } from '@material-ui/core'
import PetCard from '../PetCard'

function CardList({ data, handleCardClick }) {
  const [page, setPage] = React.useState(0)
  const cardStyles = {
    card: 'list__card',
    picture: 'list__card-figure',
    title: 'list__card-title',
    info: 'list__card-info'
  }
  const displayList = []
  let chunk = 12

  for (let i = 0; i < data.length; i += chunk) {
    displayList.push(data.slice(i, i + chunk))
  }

  const incPageHandleClick = () => {
    setPage(page + 1)
  }
  const decPageHandleClick = () => {
    setPage(page - 1)
  }
  const lastPageHandleClick = () => {
    setPage(displayList.length - 1)
  }

  return (
    <Grid component='section' className='list' container direction='column'>
      <Grid component='div' container direction='row' justify='space-between'>
        {displayList.length ? (
          displayList[page].map(content => {
            return (
              <PetCard
                content={content}
                styles={cardStyles}
                key={content.id}
                handleCardClick={handleCardClick}
              />
            )
          })
        ) : (
          <Grid container justify='center' alignItems='flex-start'>
            <Box
              fontSize='h5.fontSize'
              component='span'
            >{`...It seems we don't have any other pet right now, maybe later ;)`}</Box>
          </Grid>
        )}
      </Grid>
      <Grid
        component='div'
        container
        direction='row'
        justify='flex-end'
        className='pagination'
      >
        <Button
          variant='outlined'
          onClick={decPageHandleClick}
          disabled={page === 0}
        >
          {`<`}
        </Button>
        <Box
          fontSize='h6.fontSize'
          align='center'
          className='pagination__links'
        >
          <Link component='button' variant='body2'>
            {page + 1}
          </Link>
          <Box
            component='span'
            display={
              page + 1 === displayList.length || displayList.length <= 1
                ? 'none'
                : 'inline'
            }
          >
            ...
          </Box>
          {!(page + 1 === displayList.length || displayList.length <= 1) && (
            <Link
              component='button'
              variant='body2'
              onClick={lastPageHandleClick}
            >
              {displayList.length}
            </Link>
          )}
        </Box>
        <Button
          variant='outlined'
          onClick={incPageHandleClick}
          disabled={page + 1 >= displayList.length}
        >
          {`>`}
        </Button>
      </Grid>
    </Grid>
  )
}

export default CardList
