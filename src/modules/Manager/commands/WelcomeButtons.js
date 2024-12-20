const { Command, CommandOptions, CommandPermissions, Message } = require('axoncore');
const MessageEmbed = require("davie-eris-embed")

class WelcomeButtons extends Command {
    /**
     * @param {import('axoncore').Module} module
     */
    constructor(module) {
        super(module);

        this.label = 'webo';
        this.aliases = [ 'wb' ];

        this.hasSubcmd = false;

        this.info = {
            name: 'webo',
            description: 'Send the welcome message & buttons',
            usage: 'webo',
        };

        /**
         * @type {CommandOptions}
         */
        this.options = new CommandOptions(this, {
            argsMin: 0,
            cooldown: 10000,
            guildOnly: true,
        } );
        this.permissions = new CommandPermissions(this, {
            staff: {
                needed: this.axon.staff.admins,
                bypass: this.axon.staff.owners,
            },
        } );

    }
    /**
     * @param {import('axoncore').CommandEnvironment} env
     */

    async execute( { msg } ) {
        await this.bot.getChannel('1053064927935467530').editMessage('1066847898748338226', {
            embeds: [
                /* {
                    color: 15913095,
                    image: {
                        url: `https://cdn.discordapp.com/attachments/411903716996677639/1051271170382635139/welcome.png`
                    } 
                }, */
                {
                    color: 15913095,
                    description: `# Welcome to the Avatar: The Last Airbender Discord community!
                    \n\nThis is a Discord community for fans of the Avatar Legends universe (ATLA, Legend of Korra, and all other related media). This is a volunteer-run community to make a space for all fans of the show to come together. We are not associated with Nickelodeon or Avatar Studios.
                    \n\nFor any questions, feedback, concerns or reports, you can contact the server staff by messaging <@718577208687460482>, our modmail bot. A staff member will reply to you as soon as possible after you have sent a message. To handle the situation quickly and efficiently, please provide the staff with all relevant information.

                    \nWant to connect with us more? Check out these links below!
                    \n[Linktree](https://atla.sh/) - Check us out on social media!`,
                },
            ],
            components: [
                {
                    type: 1, 
                    components: [
                        {
                            type: 2,
                            label: "FAQ",
                            style: 1,
                            custom_id: "FAQ"
                        },
                        {
                            type: 2,
                            label: "Role Info", 
                            style: 1, 
                            custom_id: "RoleInfoButton"
                        },
                        {
                            type: 2,
                            label: "Channel Info", 
                            style: 1, 
                            custom_id: "ChannelInfoButton"
                        }, 
                        {
                            type: 2,
                            label: "Our Team", 
                            style: 1, 
                            custom_id: "TeamButton"
                        }, 
/*                         {
                            type: 2,
                            label: "Contact Staff", 
                            style: 5, 
                            url: `https://discord.com/users/718577208687460482`,
                        },  */
                    ]
                }
            ]
        })
    }
}

module.exports = WelcomeButtons;

