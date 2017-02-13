require 'rails_helper'

RSpec.describe Contact, type: :model do
  context "adicionar contact" do
    it "adicionar um contact válido" do
      contact = Contact.new
      contact.cookie = "A"
      contact.email = "a@email.com"

      expect(contact.cookie).to eq("A")
    end

  end
end
