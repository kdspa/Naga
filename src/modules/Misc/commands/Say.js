const { Command, CommandOptions, CommandPermissions } = require('axoncore');

class Say extends Command {
    /**
     * @param {import('axoncore').Module} module
     */
    constructor(module) {
        super(module);

        this.label = 'say';
        this.aliases = [
            'echo',
            'msg'
        ];

        this.hasSubcmd = false;

        this.info = {
            name: 'say',
            description: 'Sends a message to the specified channel',
            usage: 'say [channel] [message]',
        };

        /**
         * @type {CommandOptions}
         */
        this.options = new CommandOptions(this, {
            argsMin: 2,
            guildOnly: false,
        } );

        this.permissions = new CommandPermissions(this, {
            staff: {
                needed: this.axon.staff.sentries,
                bypass: this.axon.staff.owners,
            },
        } );
    }
    /**
     * @param {import('axoncore').CommandEnvironment} env
     */

    execute( { msg, args } ) {
        try {
            let channel = args[0].replace('<#','');
            channel = channel.replace('>', '');
            msg.channel.guild.channels.get(channel).createMessage(args[1]);
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Say;