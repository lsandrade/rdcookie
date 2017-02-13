require 'rails_helper'

RSpec.describe Log, type: :model do
  context "adicionar log" do
    it "adicionar um log válido" do
      log = Log.new
      log.cookie = "A"
      log.page = "home"

      expect(log.page).to eq("home")
    end
    it "usuário acessa 2 páginas" do
      log = Log.new
      log.cookie = "A"
      log.page = "home"

      log1 = Log.new
      log1.cookie = "A"
      log1.page = "preco"

      expect(log.page).to eq("home")
      expect(log1.page).to eq("preco")
    end

    it "2 usuários acessam" do
      log = Log.new
      log.cookie = "A"
      log.page = "home"

      log1 = Log.new
      log1.cookie = "B"
      log1.page = "preco"

      expect(log.page).to eq("home")
      expect(log.cookie).to eq("A")
      expect(log1.page).to eq("preco")
      expect(log1.cookie).to eq("B")
    end
  end
end
