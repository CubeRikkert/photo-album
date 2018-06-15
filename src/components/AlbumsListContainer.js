//./src/components/AlbumsListContainer.js
import * as React from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum, setAlbums, getAlbums } from '../actions/albums'


class AlbumsListContainer extends React.PureComponent {
  state = {}

  componentDidMount() {
    this.props.getAlbums()

    this.props.addAlbum(5, 'Enjoying sunshine')
  }

  render() {
    console.log(this.state, 'state', this.props, 'props')
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (store) => {
  return {
    albums: store.albums
  }
}

export default connect(mapStateToProps, { addAlbum, setAlbums, getAlbums })(AlbumsListContainer)
