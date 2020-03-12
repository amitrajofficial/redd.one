import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import { Avatar } from './Avatar'
import { ReactComponent as HalfCircle } from '../images/icons/half-circle.svg'

interface AuthorProps {
  name: string
  description: string
  githubHandle: string
}

const AvatarConatiner = styled.div`
  position: relative;
`

const StyledHalfCircle = styled(HalfCircle)`
  position: absolute;
  top: -6px;
  left: -6px;
`

const AuthorName = styled.p`
  margin: 0;
  font-weight: bold;
`

const AuthorDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
`

export const Author: React.FC<AuthorProps> = ({
  name,
  description,
  githubHandle,
}) => {
  return (
    <Composition templateCols="auto 1fr" alignItems="center" gap={12 / 16}>
      <AvatarConatiner>
        <Avatar src={`https://github.com/${githubHandle}.png`} alt={name} />
        <StyledHalfCircle />
      </AvatarConatiner>
      <div>
        <AuthorName>{name}</AuthorName>
        <AuthorDescription>{description}</AuthorDescription>
      </div>
    </Composition>
  )
}
