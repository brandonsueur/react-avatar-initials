import React, { Component } from 'react'

class AvatarInitials extends Component {

	static defaultProps = {
		name: "",
		className: '',
		style: {},
		bgColor: "#000",
		fgColor: "#fff",
		rounded: true
  }

	constructor(props) {
    super(props)
		this.state = {}
	}

  render() {
		const { name, className, style, bgColor, fgColor, rounded } = this.props
		const userName = name.split(' ')

		const avatarInitials = {
      height: 100,
      width: 100,
      backgroundColor: bgColor,
      color: fgColor,
      borderRadius: rounded ? '50%' : 'none',
      display: 'table'
    }

		const avatarSpan = {
			display: 'table-cell',
			verticalAlign: 'middle',
			textAlign: 'center'
		}

		const avatarTitle = {
			margin: 0,
			padding: 0,
			fontFamily: "Lato",
			fontWeight: `500`,
			letterSpacing: 3,
			textTransform: 'uppercase'
		}

    return (
      <div className={className} style={avatarInitials} title={name.toUpperCase()} >
        <span style={avatarSpan}>
          <h1 style={avatarTitle}>
            {`
							${userName.length >= 2
								? `${userName[0].charAt(0)}${userName[1].charAt(0)}`
	              : userName[0].charAt(0)}
						`}
          </h1>
        </span>
	    </div>
	  )
  }
}

export default AvatarInitials
