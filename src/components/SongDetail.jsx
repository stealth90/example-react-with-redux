import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
	if (!selectedSong) {
		return (
			<div className="ui card">
				<div className="content">
					<div className="ui placeholder">
						<div className="header">
							<div className="very short line"></div>
							<div className="medium line"></div>
						</div>
						<div className="paragraph">
							<div className="short line"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="ui card">
			<div className="content">
				<div className="header">Song Selected: </div>
			</div>
			<div className="content">
				<h3 className="ui sub ">Title: {selectedSong.title}</h3>
				<div className="ui small feed">
					<div className="event">
						<div className="content">
							<div className="summary">
								Duration :{selectedSong.duration}
								<span role="img" aria-label="icon">
									{" "}
									🕐
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
