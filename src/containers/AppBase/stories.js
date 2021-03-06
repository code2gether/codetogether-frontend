import React from 'react'
import Media from 'react-media'
import { storiesOf } from '@storybook/react'
import Toolbar from '../../components/Toolbar'
import AppBar from '../../components/AppBar'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import IconButton from '../../components/IconButton'
import Button from '../../components/Button'
import FooterStory from '../../components/Footer/stories' // Change to FooterContainer
import AppBarMenu from '../../components/AppBarMenu'
import SiteInfoStory from '../../components/SiteInfo/stories'
import Burger from '../../components/Burger'
import RootRef from '../../components/RootRef'
import Logo from '../../components/icons/Logo'
import styles from './styles.module.scss'

const stories = storiesOf('2. Containers/AppBase', module)

class AppBase extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: false,
		}
	}

	handleIsOpen = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		const { isOpen } = this.state
		const { children } = this.props

		return (
			<React.Fragment>
				<AppBar
					transparent
					appBarRef={ref => {
						this.headerRef = ref
					}}
				>
					{/* Desktop Toolbar */}
					<Toolbar variant="default" disableGutters>
						<Container>
							<Grid container alignItems="center">
								<Grid item xs={10} md={2} lg={2}>
									<IconButton>
										<Logo
											style={{
												fontSize: '5em',
											}}
										/>
									</IconButton>
								</Grid>

								<Media query={{ minWidth: 992 }}>
									{matches =>
										matches ? (
											<React.Fragment>
												<Grid
													item
													md={8}
													lg={8}
													style={{
														textAlign: 'right',
													}}
												>
													<AppBarMenu>
														<a href="#">Schedule</a>
														<a href="#">Team</a>
														<a href="#">Blog</a>
														<a href="#">Get in Touch</a>
													</AppBarMenu>
												</Grid>

												<Grid
													item
													md={1}
													lg={1}
													style={{ paddingLeft: 48 }}
												>
													<Button color="primary">Signup</Button>
												</Grid>
											</React.Fragment>
										) : (
											<Grid item xs={1} md={1} lg={2}>
												<Burger
													onClick={this.handleIsOpen}
													close={isOpen}
												/>
											</Grid>
										)
									}
								</Media>
								<Media query={{ maxWidth: 768 }}>
									{matches =>
										matches && isOpen ? (
											<div className={styles.mobileContainer}>
												<Grid
													item
													xs={12}
													sm={12}
													md={8}
													lg={8}
													style={{
														textAlign: 'right',
													}}
												>
													<AppBarMenu
														ListProps={{
															className: styles.list,
															isMobile: true,
														}}
													>
														<a href="#about">About</a>
														<a href="#schedule">Schedule</a>
														<a href="#team">Team</a>
														<a href="#contact">Get in Touch</a>
													</AppBarMenu>
												</Grid>

												<Grid item xs={12} sm={12} md={1} lg={1}>
													<Button color="primary">Signup</Button>
												</Grid>
											</div>
										) : null
									}
								</Media>
							</Grid>
						</Container>
					</Toolbar>
				</AppBar>

				{children ? (
					<RootRef
						rootRef={ref => {
							this.pageRef = ref
						}}
					>
						<main>{children}</main>
					</RootRef>
				) : (
					<div style={{ height: '100vh' }}>Content here...</div>
				)}
				<FooterStory />
				<SiteInfoStory />
			</React.Fragment>
		)
	}
}

stories.add('Default', () => <AppBase />)

export default AppBase
