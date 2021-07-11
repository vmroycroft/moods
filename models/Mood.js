import mongoose from 'mongoose';

const MoodSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.models.Mood || mongoose.model('Mood', MoodSchema);
