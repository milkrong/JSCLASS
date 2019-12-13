import React from 'react';
import Tag from './tag';
import { connect } from 'react-redux';
import { deleteTag } from './redux/tag.actions';
import './tagList.scss';

class TagList extends React.Component{
    
    handleClick = id => {
        this.props.deleteTag(id);
    }

    render () {
        return (
            <div className="tag-list">
                {
                    this.props.tags.map(
                        tag => <Tag key={tag.id} name={tag.name} id={tag.id} handleClick={this.handleClick}/>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { tags: state };
};

const mapDispatchToProps = dispatch => {
return {
    deleteTag: id => dispatch(deleteTag(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);